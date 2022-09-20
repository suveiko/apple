export const fetchCategories = async (): Promise<void> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`);

  const data = await res.json();

  console.log(data);
};
