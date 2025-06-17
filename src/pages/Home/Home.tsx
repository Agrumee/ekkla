import Heading from '../../components/atoms/Heading/Heading'
import Paragraph from '../../components/atoms/Paragraph/Paragraph'
import Input from '../../components/atoms/Input/Input'
import './Home.scss'
import Label from '../../components/atoms/Label/Label'
import Button from '../../components/atoms/Button/Button'
import Tag from '../../components/atoms/Tag/Tag'

export default function Home() {
    return (
        <div>
            {/* <Heading level={1} content="NOM DE L'APP" color='white' />
            <Heading level={2} content='FILTRER ET TRIER' color='white' />
            <Heading level={3} content='14 mai 2025' color='white' />
            <Heading level={4} content='Bowling' color='white' />
            <Paragraph content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' size='tiny' />
            <Paragraph content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' size='small' />
            <Paragraph content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' size='medium' />
            <Paragraph content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' size='big' />
            <Label content='test' />
            <Input size="large" onBlur={(e) => console.log(e.target.value)} /> */}
            <Button variant='primary' content='count' onClick={() => console.log('+1')} />
            <Button variant='secondary' content='trash' onClick={() => console.log('test')} />
            <Button variant='secondary' content='trash' onClick={() => console.log('test')} disabled={true} />
            <Tag content='Tag 1' className='tag-class' />
            <Tag content='Tag 2' className='tag-class' clickable={true} selected={true} onClick={() => console.log('Tag 2 clicked')} />
            <Tag content='Tag 3' className='tag-class' clickable={true} onClick={() => console.log('Tag 3 clicked')} />
        </div>
    )
}