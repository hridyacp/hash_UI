export default function camelize(str) {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  }