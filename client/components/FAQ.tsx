import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Como funciona o Agente de IA?",
      answer:
        "O Agente de IA automatiza tarefas, como atendimento ao cliente e vendas, utilizando aprendizado de máquina para melhorar continuamente a eficiência.",
    },
    {
      question: "Quanto tempo demora para ver resultados?",
      answer:
        "Os primeiros resultados podem ser notados em poucas semanas, com melhorias contínuas à medida que o agente aprende com as interações.",
    },
    {
      question: "O suporte é em português?",
      answer:
        "Sim, oferecemos suporte completo em português, disponível 24/7 para resolver qualquer dúvida ou problema.",
    },
    {
      question: "Preciso de conhecimento técnico para usar o Agente de IA?",
      answer:
        "Não, nossa interface é intuitiva e fácil de usar, sem necessidade de conhecimentos técnicos avançados.",
    },
    {
      question: "O Agente de IA pode ser integrado ao meu sistema de CRM?",
      answer:
        "Sim, nosso Agente de IA se integra facilmente aos principais sistemas de CRM e outras ferramentas de vendas.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Encontre respostas para as dúvidas mais comuns sobre nosso Agente de
            IA
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-gray-200"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-corporate-blue-600 transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
