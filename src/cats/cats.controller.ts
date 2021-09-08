import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  HttpException,
  UseFilters,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  // cats
  @Get()
  @UseFilters(HttpException)
  getAllcat() {
    throw new HttpException({ success: false, message: 'api is broken' }, 401);
    return 'all cat';
  }

  // cats/:id
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
