"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
interface AccordionItemProps {
    title: string;
    price: string;
    description: string;
}

const AccordionItem = ({ title, price, description }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 bg-white transition-colors">
            <button
                className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-lg text-gray-900 ">{title}</span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-gray-800' : 'bg-gray-800'}`}>
                    {isOpen
                        ? <Minus width={18} className=" text-white" />
                        : <Plus width={18} className=" text-white" />
                    }
                </div>
            </button>
            {isOpen && (
                <div className="pb-4 pr-8 text-gray-600 text-base">
                    <p className="mb-2 text-sm text-gray-500">Starting at {price}</p>
                    <p className="leading-relaxed">Description: {description}</p>
                </div>
            )}
        </div>
    );
};

export default AccordionItem;