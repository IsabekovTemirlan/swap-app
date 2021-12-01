import H1 from '@material-tailwind/react/Heading1';
import LeadText from '@material-tailwind/react/LeadText';

export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap justify-center">
               
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <H1 color="white">Как обменяться?</H1>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                            Сайт «SWAP-APP» — это простой и удобный сервис обмена товарами на территории Кыргызстана. Мы создали «SWAP-APP», чтобы вы могли быстро поменять свои старые вещи на новые. Или на те, о которых вы давно мечтали. Подать свое объявление сейчас очень просто и абсолютно бесплатно.
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
