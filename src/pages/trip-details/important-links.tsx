import { Link2, Plus, Tag } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Modal } from "../../components/modal";
import { Input } from "../../components/input";

interface Link {
  id: string;
  title: string;
  url: string;
}

export function ImportantLinks() {
  const { tripId } = useParams();
  const [links, setLinks] = useState<Link[]>([]);

  const [isCreateLinkModalOpen, setCreateLinkModalOpen] = useState(false);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links));
  }, [tripId]);

  function toggleCreateLinkModal() {
    setCreateLinkModalOpen(!isCreateLinkModalOpen);
  }

  async function createLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const url = data.get("url")?.toString();

    await api.post(`/trips/${tripId}/links`, {
      title,
      url,
    });

    window.document.location.reload(); //REFACTOR
  }

  return (
    <>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Links importantes</h2>

        <div className="space-y-5">
          {links.length
            ? links.map((link) => {
                return (
                  <div
                    key={link.id}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5">
                      <span className="block font-medium text-zinc-100">
                        {link.title}
                      </span>
                      <a
                        href={link.url}
                        className="block font-medium text-xs text-zinc-400 truncate hover:text-zinc-200"
                      >
                        {link.url}
                      </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                  </div>
                );
              })
            : "Nenhum link adicionado."}
        </div>

        <Button onClick={toggleCreateLinkModal} size="full" variant="secondary">
          <Plus className="size-5" />
          Cadastrar novo link
        </Button>
      </div>

      {isCreateLinkModalOpen && (
        <Modal
          title="Cadastrar link"
          subtitle="Todos os convidados podem visualizar os links importantes."
          toggleModal={toggleCreateLinkModal}
        >
          <form onSubmit={createLink} className="space-y-3">
            <div className="space-y-2">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2">
                <Tag className="size-5 text-zinc-400" />
                <Input name="title" placeholder="Título do link" />
              </div>
              <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2  ">
                <Link2 className="size-5 text-zinc-400" />
                <Input name="url" placeholder="URL" />
              </div>
            </div>

            <Button type="submit" size="full">
              Salvar link
            </Button>
          </form>
        </Modal>
      )}
    </>
  );
}
