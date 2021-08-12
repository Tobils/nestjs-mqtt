import { Module } from '@nestjs/common';
import { SensorService } from './sensor.service';

@Module({
  providers: [SensorService]
})
export class SensorModule {}
