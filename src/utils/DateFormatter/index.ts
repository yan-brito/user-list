export function getTimestamp(date: string) {
    const formattedDate = date.replace(/\//g, '-').split('-').reverse().join('-');
    return new Date(formattedDate);
};

export function getAge(dateOfBirth: string) {
  const today = new Date;
  const birthDate = new Date(dateOfBirth);
  
  let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
  
  const monthDifference = today.getUTCMonth() - birthDate.getUTCMonth();
  const dayDifference = today.getUTCDate() - birthDate.getUTCDate();

  if(monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  };

  return age
};