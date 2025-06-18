import Heading from '../../components/atoms/Heading/Heading'
import Paragraph from '../../components/atoms/Paragraph/Paragraph'
import Input from '../../components/atoms/Input/Input'
import './Home.scss'
import Label from '../../components/atoms/Label/Label'
import Button from '../../components/atoms/Button/Button'
import Tag from '../../components/atoms/Tag/Tag'
import Icon from '../../components/atoms/Icon/Icon'
import TooltipHelp from '../../components/molecules/TooltipHelp/TooltipHelp'
import TooltipInfo from '../../components/molecules/TooltipInfo/TooltipInfo'
import SearchBar from '../../components/molecules/SearchBar/SearchBar'
import CustomInput from '../../components/molecules/CustomInput/CustomInput'
import EventCard from '../../components/organisms/EventCard/EventCard'

export default function Home() {
    return (
        <div>

            <Button variant='primary' content='count' onClick={() => console.log('+1')} />
            <Button variant='secondary' content='trash' onClick={() => console.log('test')} />
            <Button variant='secondary' content='trash' onClick={() => console.log('test')} disabled={true} />
            <Tag content='Tag 1' className='tag-class' />
            <Tag content='Tag 2' className='tag-class' clickable={true} selected={true} onClick={() => console.log('Tag 2 clicked')} />
            <Tag content='Tag 3' className='tag-class' clickable={true} onClick={() => console.log('Tag 3 clicked')} />
            <Icon name="Camera" color='dark-purple' size={28} />
            <Heading level={1} content="NOM DE L'APP" color='white' />
            <Heading level={2} content='FILTRER ET TRIER' color='white' />
            <Heading level={3} content='14 mai 2025' color='white' />
            <SearchBar onSearch={(query) => console.log('Recherche effectuée avec:', query)} />
            <Paragraph content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' size='big' />
            <Label content='test' />
            <div>
                <CustomInput labelLeft='min' type='number' onChange={(e) => console.log(e.target.value)} unit='$' />
                <Input size="large" onBlur={(e) => console.log(e.target.value)} />
            </div>
            <EventCard
                id={1}
                title="Titre de l' événement"
                date='2025-05-14'
                description="Description de l'événement : je teste les descriptions de plus de 20 mots pour voir si le système de troncature fonctionne correctement. Il faut que ça coupe au bout de 20 mots et ajoute ' [...]' à la fin pour indiquer qu'il y a plus de texte."
                imageUrl='https://www.pereolive.com/wp-content/uploads/2021/06/pic-nic-au-pied-dun-arbre-pere-olive--1024x683.jpg'
                isFavorite={true}
                tags={['#Racisé.es', '#FemmesEtMinoritésDeGenre']} />
            {/* <TooltipInfo heading='je suis une info' content="Ceci est une info-bulle d'exemple. Elle peut contenir des informations supplémentaires ou des conseils." />
            <TooltipHelp label='je suis un label' content="Ceci est une info-bulle d'exemple. Elle peut contenir des informations supplémentaires ou des conseils." />
            <Input type='checkbox' id='checkbox1' name='checkbox1' className='custom-checkbox' onChange={(e) => console.log(e.target.checked)} />
            <Input type='radio' id='radio1' name='radio1' className='custom-radio' onChange={(e) => console.log(e.target.checked)} /> */}

        </div>
    )
}