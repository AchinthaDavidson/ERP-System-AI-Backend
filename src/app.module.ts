import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { TeamModule } from './team/team.module';
import { ProjectModule } from './project/project.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    TeamModule,
    ProjectModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
