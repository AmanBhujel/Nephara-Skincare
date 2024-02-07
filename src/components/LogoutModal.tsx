import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useLogoutStore } from "@/stores/LogoutStore";
import { useRouter } from "next/navigation";
import ToastMessage from "./utils/ToastMessage";

export default function LogoutModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const isLogoutModalOpen = useLogoutStore((state) => state.isLogoutModalOpen);
  const setIsLogoutModalOpen = useLogoutStore((state) => state.setIsLogoutModalOpen);
  const router = useRouter();


  const handleLogout = () => {
    const pastDate = new Date(0);

    document.cookie = `token=; expires=${pastDate.toUTCString()}; path=/; Secure; SameSite=None;`;
    
    ToastMessage("success","Signed Out Successfully.")
    setIsLogoutModalOpen(false);
    router.replace("/")
  };


  return (
    <>
      <Modal isOpen={isLogoutModalOpen} onOpenChange={onOpenChange} onClose={() => setIsLogoutModalOpen(false)} isDismissable={false} size="xs">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <p>
                  Do you want to log out?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  No
                </Button>
                <Button color="primary" className="font-medium" onPress={handleLogout}>
                  Log out
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
