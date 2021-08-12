import { Inject, Injectable } from '@nestjs/common';
import { MqttService, Payload, Subscribe } from 'src/mqtt';

@Injectable()
export class SensorService {
    constructor(
        @Inject(MqttService) 
        private readonly mqttService: MqttService
    ) {}

    @Subscribe({
      topic: 'myTopic',
      transform: payload => payload.toString(),
    })
    garageTemp(@Payload() payload) {
      console.log(payload);
      this.mqttService.publish('response-server', {message: 'data diterima !'})
    }
}
