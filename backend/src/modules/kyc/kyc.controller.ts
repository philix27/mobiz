import { Controller, Post, Body } from '@nestjs/common';
import { SelfService } from './self.service';

@Controller('kyc')
export class KycController {
    public constructor(private readonly self: SelfService) {}

    @Post("self")
    verify(@Body() item: { proof: string; publicSignals: string }) {
        console.log('Hit self ' + item.proof);
        return this.self.verify(item);
    }
}
