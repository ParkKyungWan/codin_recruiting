const AppPreuse: React.FC = () => {
   
    return (
        <div 
            className="relative w-[295.4px] h-[581px] flex items-center justify-center"
        >   
            <iframe src="https://codin.inu.ac.kr/" 
                sandbox="allow-scripts allow-same-origin allow-popups"
                className="z-5 absolute left-[-25%] top-[-24%] w-[150%] h-[150%] scale-[0.57] origin-center">
            </iframe>
            <div 
                className="z-10 w-full h-full bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: "url('/images/iphone.png')" }}
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-white w-[260.4px] h-[541px] rounded-md"/>
            </div>
            
        </div>
    );

};

export default AppPreuse;