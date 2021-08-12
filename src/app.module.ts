import { Module } from '@nestjs/common';
import { MqttModule } from './mqtt/mqtt.module';
import { MqttModuleOptions } from './mqtt/mqtt.interface';
import { SensorModule } from './sensor/sensor.module';

const mqttOptions: MqttModuleOptions = {
  host: '127.0.0.1',
  port: 1883,
  keepalive: 30000,
  reconnectPeriod: 10
};

@Module({
  imports: [
    MqttModule.forRoot(mqttOptions),
    SensorModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
