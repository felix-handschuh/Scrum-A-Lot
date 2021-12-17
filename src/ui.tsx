import {
  Button,
  Container,
  Divider,
  Disclosure,
  render,
  TextboxMultiline,
  useInitialFocus,
  VerticalSpace,
  Checkbox,
  TextboxAutocomplete,
  Text
 


} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

function Plugin (props: { text: string }) {
  const [text, setText] = useState(props.text)

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
      setIsOpen(!(isOpen === true))
  }

  const handleUpdateButtonClick = useCallback(
    function () {
      emit('Create Story', text)
    },
    [text]
  )
  return (
    <Container>
      <VerticalSpace space='large' />
     
 

      <VerticalSpace space='small' />
      <TextboxMultiline
        {...useInitialFocus()}
        onValueInput={setText}
        value={text}
      />
      <VerticalSpace space='large' />

          <Divider />

          <Disclosure isOpen={isOpen} onClick={handleClick} title="Settings">
          
          Hide entries until estimation ends


          </Disclosure>

      <VerticalSpace space='large' />

          <Button fullWidth onClick={handleUpdateButtonClick}>
              Start
          </Button>

      
          








      <VerticalSpace space='small' />
    </Container>
  )
}

export default render(Plugin)
