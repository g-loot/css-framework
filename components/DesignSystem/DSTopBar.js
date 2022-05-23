export default function DSTopBar() {
  return (
    <div className='sticky top-0 z-50 bg-ui-800/50 flex items-center backdrop-blur'>
      <div className='py-2 container mx-auto flex space-x-12 relative text-white items-stretch justify-between'>
        <div className='w-auto md:w-3/12 lg:w-2/12 flex items-center'>
          <a href='../'>
            <img width="123" height="64" src="https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg" alt="G-Loot logo" />
          </a>
          
        </div>
        <div className='w-full md:w-9/12 lg:w-10/12 hidden md:flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='hidden lg:block font-headings italic text-xl text-ui-300'>
              Front-end Framework
            </div>
          </div>
          <div className='flex items-center justify-end'>

          </div>
        </div>
      </div>
    </div>
  );
}
