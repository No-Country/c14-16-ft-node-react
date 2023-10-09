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

await Client.sync();
await Company.sync();
await Service.sync();
await Branch.sync();
await ServiceBranch.sync({force:true});
await Image.sync({force:true});
await Pet.sync();
await AnimalTypes.sync();
await Booking.sync({force:true});
await BranchAnimalTypes.sync({force:true});