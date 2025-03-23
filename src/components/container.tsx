export const Container = (props: React.ComponentProps<"div">) => {
  return (
    <div
      className="p-4 w-full md:px-10 lg:px-20 max-w-[1500px]"
      {...props}
    ></div>
  );
};
