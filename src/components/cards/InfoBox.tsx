
type Props  = {
   title: string
   descr: string
    icon?: string
};

function InfoBox({title, descr, icon}:Props) {
    return (
        <div className='opacity-50 rounded-lg flex flex-col items-center  p-3 border-gray-500/50 border-1'>
            <h3  className='text-sm'>{title}</h3>
            <div className='flex items-center gap-2'>
                {icon && <img className='size-5' src={icon} alt=""/>}
                <p className='text-lg font-semibold'>{descr}</p>
            </div>

        </div>
    );
}

export default InfoBox;