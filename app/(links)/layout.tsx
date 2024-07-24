import UpperMenu from "@/components/UpperMenu";

const LinkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UpperMenu />
      <div className="mt-20">{children}</div>
    </div>
  );
};

export default LinkLayout;
