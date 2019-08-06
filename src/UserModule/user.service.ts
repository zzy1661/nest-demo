import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getHello(): string {
        return 'user: Hello World!';
    }
}
