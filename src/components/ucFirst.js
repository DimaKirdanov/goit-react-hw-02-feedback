export default function ucFirs(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
