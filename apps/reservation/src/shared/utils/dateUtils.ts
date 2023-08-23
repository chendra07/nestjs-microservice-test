import { BadRequestException } from '@nestjs/common';

export function parseDate(input: string) {
  const inputDateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (!inputDateRegex.test(input)) {
    throw new BadRequestException(
      'Invalid Date format! (must be [day]/[month]/[year] | ex: 22/07/2022)',
    );
  }

  const parts = input.split('/');
  return new Date(+parts[2], +parts[1] - 1, +parts[0]);
}
