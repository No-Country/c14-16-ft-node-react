import {  Client } from './Client.js';
import { Pet } from './Pet.js'
import { Service } from './Service.js'
import { Company } from './Company.js'
import { Branch } from './Branch.js'
import { Image } from './Image.js'
import { ServiceBranch } from './ServiceBranch.js'
import { Booking } from './Booking.js'
import { AnimalTypes } from './AnimalTypes.js';
import { BranchAnimalTypes } from './BranchAnimalType.js';
import { Rate } from './Rate.js';

await Client.sync();
await Company.sync();
await Service.sync();
await Branch.sync();
await Rate.sync();
await Image.sync();
await ServiceBranch.sync()
await AnimalTypes.sync();
await Pet.sync();
await Booking.sync();
await BranchAnimalTypes.sync();