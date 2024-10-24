import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

import { UserSeedData } from './data/users';
import { FunctionalUnitsSeedData } from './data/functional-units';
import { FunctionalUnit } from 'src/functional-units/entities/functional-unit.entity';
import { Arba } from 'src/arba/entities/arba.entity';
import { ArbaSeedData } from './data/arba';
import { ArbaInvoice } from 'src/arba/entities/arba-invoices.entity';
import { ArbaInvoiceStatus } from 'src/arba/interfaces/arba-invoice-status.interface';

@Injectable()
export class SeedService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(FunctionalUnit) private readonly functionalUnitRepository: Repository<FunctionalUnit>,
        @InjectRepository(Arba) private readonly arbaRepository: Repository<Arba>,
        @InjectRepository(ArbaInvoice) private readonly arbaInvoiceRepository: Repository<ArbaInvoice>
    ) {}

    async seed() {
        try {
            await this.createUsersAndFunctionalUnits();
            await this.generateArbaInvoices()
            return;
        } catch (error) {
            return console.log(error)
        }
    }

    private async createUsersAndFunctionalUnits() {
        const usersInDb = [];
        const functionalUnitsDb = [];

        for (const userData of UserSeedData) {
            const existingUsers = await this.userRepository.find({where: {email: userData.email}})

            if (existingUsers.length === 0) {
                const user = this.userRepository.create(userData)
                usersInDb.push(await this.userRepository.save(user));
            }
        }

        for (const functionalUnitsData of FunctionalUnitsSeedData) {
            const existingFunctionalUnit = await this.functionalUnitRepository.find({where: {number: functionalUnitsData.number}})
            
            if (existingFunctionalUnit.length === 0) {
                const functionalUnit = this.functionalUnitRepository.create({...functionalUnitsData, user: usersInDb[functionalUnitsData.number - 1]});
                functionalUnitsDb.push(await this.functionalUnitRepository.save(functionalUnit));
            }
        }
    }

    private async generateArbaInvoices() {
        const arba = this.arbaRepository.create(ArbaSeedData)
        await this.arbaRepository.save(arba);
        const [data, count] = await this.functionalUnitRepository.findAndCount()
        const calculateShare = arba[0].totalAmount / count

        data.forEach(async ufs => {
            const invoice = this.arbaInvoiceRepository.create({amount: calculateShare,status: ArbaInvoiceStatus.NOT_PAYED,functionalUnit: ufs, arba: arba[0]})
            await this.arbaInvoiceRepository.save(invoice)
            await this.functionalUnitRepository.update(ufs.id, {balance: calculateShare});
        })
    }
}
