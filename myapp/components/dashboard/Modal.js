'use client'
import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiPlus} from "react-icons/fi"


const Modals = ({children}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <Button 
    className='bg-transparent hover:bg-grey hover:text-primary'
    onPress={onOpen}>
        <FiPlus />
        <p className="hidden md:block">Add Workout</p>
    </Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">New Workout</ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>          
          </>
        )}
      </ModalContent>
    </Modal>
  </>
  )
}

export default Modals