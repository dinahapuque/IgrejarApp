import { ChurchType } from '../../data/churches';

function getFullAddress(church: ChurchType): string {
  return `${church.address}, ${church.city} - ${church.state}, ${church.zipCode}`;
}

export { getFullAddress };
