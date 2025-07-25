import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  Zap,
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Info,
  Star,
  Circle,
  CheckCheck
} from "lucide-react";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Ana Silva",
      role: "UI/UX Designer",
      avatar: "/placeholder.svg",
      lastMessage: "Enviei as telas do protótipo para revisão",
      time: "14:32",
      unread: 2,
      online: true,
      project: "Design de App Mobile"
    },
    {
      id: 2,
      name: "João Santos",
      role: "Desenvolvedor Full Stack",
      avatar: "/placeholder.svg",
      lastMessage: "Perfeito! Vou implementar essas funcionalidades",
      time: "13:15",
      unread: 0,
      online: false,
      project: "Sistema ERP"
    },
    {
      id: 3,
      name: "Maria Costa",
      role: "Redatora",
      avatar: "/placeholder.svg",
      lastMessage: "Obrigada pelo feedback. Vou ajustar o conteúdo",
      time: "11:45",
      unread: 1,
      online: true,
      project: "Conteúdo Website"
    },
    {
      id: 4,
      name: "Pedro Oliveira",
      role: "Designer Gráfico",
      avatar: "/placeholder.svg",
      lastMessage: "Qual sua opinião sobre essas cores?",
      time: "Ontem",
      unread: 0,
      online: false,
      project: "Identidade Visual"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Ana Silva",
      content: "Olá! Vi seu projeto de design de app mobile. Tenho bastante experiência nessa área e gostaria de enviar uma proposta.",
      time: "09:30",
      isOwn: false
    },
    {
      id: 2,
      sender: "Você",
      content: "Oi Ana! Fico feliz com seu interesse. Pode me contar um pouco sobre sua experiência com apps de fintech?",
      time: "09:45",
      isOwn: true
    },
    {
      id: 3,
      sender: "Ana Silva",
      content: "Claro! Já trabalhei em 3 projetos de apps financeiros, incluindo um app de investimentos que tem mais de 100mil usuários ativos.",
      time: "09:47",
      isOwn: false
    },
    {
      id: 4,
      sender: "Ana Silva",
      content: "Posso te mostrar meu portfólio com casos similares se quiser.",
      time: "09:48",
      isOwn: false
    },
    {
      id: 5,
      sender: "Você",
      content: "Perfeito! Me mande sim. Estou procurando alguém com experiência específica em UX para aplicativos financeiros.",
      time: "10:15",
      isOwn: true
    },
    {
      id: 6,
      sender: "Ana Silva",
      content: "Ótimo! Vou preparar uma apresentação focada nos casos de fintech e te envio ainda hoje.",
      time: "10:20",
      isOwn: false
    },
    {
      id: 7,
      sender: "Ana Silva",
      content: "Enviei as telas do protótipo para revisão",
      time: "14:32",
      isOwn: false
    }
  ];

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Aqui você adicionaria a lógica para enviar a mensagem
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard/cliente" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar ao Dashboard
              </Link>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">TalentHub</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>CL</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mensagens</h1>
          <p className="text-gray-600">Converse com freelancers e gerencie seus projetos</p>
        </div>

        <div className="grid grid-cols-12 gap-6 h-[700px]">
          {/* Conversations List */}
          <div className="col-span-4">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Buscar conversas..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[580px]">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 cursor-pointer border-b hover:bg-gray-50 transition-colors ${
                        selectedChat === conversation.id ? 'bg-blue-50 border-r-2 border-r-primary' : ''
                      }`}
                      onClick={() => setSelectedChat(conversation.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={conversation.avatar} />
                            <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <Circle className="absolute -bottom-0 -right-0 w-3 h-3 fill-green-500 text-green-500" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-sm font-medium text-gray-900 truncate">
                              {conversation.name}
                            </h3>
                            <span className="text-xs text-gray-500">{conversation.time}</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-1">{conversation.role}</p>
                          <p className="text-sm text-gray-700 truncate">{conversation.lastMessage}</p>
                          <Badge variant="outline" className="text-xs mt-1">
                            {conversation.project}
                          </Badge>
                        </div>
                        {conversation.unread > 0 && (
                          <Badge variant="default" className="text-xs min-w-[20px] h-5 flex items-center justify-center">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="col-span-8">
            <Card className="h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="flex-row items-center space-y-0 pb-3">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={selectedConversation?.avatar} />
                      <AvatarFallback>
                        {selectedConversation?.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {selectedConversation?.online && (
                      <Circle className="absolute -bottom-0 -right-0 w-3 h-3 fill-green-500 text-green-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{selectedConversation?.name}</h3>
                    <p className="text-sm text-gray-600">{selectedConversation?.role}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      4.9 • {selectedConversation?.project}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Info className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <Separator />

              {/* Messages */}
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-[480px] p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] p-3 rounded-lg ${
                            message.isOwn
                              ? 'bg-primary text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <div className={`flex items-center justify-end mt-1 text-xs ${
                            message.isOwn ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            <span className="mr-1">{message.time}</span>
                            {message.isOwn && (
                              <CheckCheck className="w-3 h-3" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>

              <Separator />

              {/* Message Input */}
              <div className="p-4">
                <div className="flex items-end space-x-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Digite sua mensagem..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="min-h-[40px] resize-none"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          sendMessage();
                        }
                      }}
                    />
                  </div>
                  <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
