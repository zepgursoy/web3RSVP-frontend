function joinClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default joinClassNames;
