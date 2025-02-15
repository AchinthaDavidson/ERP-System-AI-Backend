import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchema } from './schemas/book.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Contact',schema:ContactSchema}])],
  controllers: [ContactController],
  providers: [ContactService]
})

export class ContactModule {}
