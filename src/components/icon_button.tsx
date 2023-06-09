function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <div className='cursor-pointer rounded-full p-2 transition-all hover:bg-gray-100'>
      {children}
    </div>
  );
}

export default IconButton;
