import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CreateTransactionDialog } from "./create-transaction-dialog";

export function TransactionDialog() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center px-4 py-2 gradient-bg text-white rounded-lg font-medium hover:bg-purple-700 cursor-pointer">
        <FontAwesomeIcon icon={faPlus} width={16} className="mr-2" /> Nova
        transação
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar uma nova transação</DialogTitle>
          <DialogDescription>
            A transação ocorre em alguns segundos, enviaremos uma notificação no
            seu email quando for concluida
          </DialogDescription>
          <CreateTransactionDialog />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
