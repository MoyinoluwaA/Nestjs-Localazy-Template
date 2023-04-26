import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { I18n, I18nContext } from 'nestjs-i18n';
import { passwordDto, ResetPasswordDto } from './password.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return ('Hello World!');
  }

  @Post('reset-password')
  @HttpCode(200)
  setUpPassword(@I18n() i18n: I18nContext, @Body() resetPasswordDto: ResetPasswordDto): passwordDto {
    return {
      title: i18n.t(`test.set-up-password.title`),
      text: `${i18n.t('test.set-up-password.heading', { args: { username: resetPasswordDto.username }})},
       ${i18n.t(`test.set-up-password.followLink`, { args: { email: resetPasswordDto.email }})}`.replace(/\s\s+/g, ' ')
    }
  }
}
