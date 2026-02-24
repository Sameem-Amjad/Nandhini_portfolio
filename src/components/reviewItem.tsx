import { Star } from "lucide-react";
interface ReviewItemProps {
    review: {
        id: number;
        author: string;
        date: string;
        quality: number;
        communication: number;
        service: string;
        text: string;
    };
}

const ReviewItem = ({ review }: ReviewItemProps) => (
    <div className="py-6 border-b border-gray-200 last:border-0">
        <div className="flex justify-between items-start mb-4">
            <h4 className="font-bold text-gray-900 text-lg">{review.author}</h4>
            <span className="text-sm text-gray-500 hidden md:block">{review.date}</span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center text-sm">
                <span className="w-28 text-gray-600">Quality of work</span>
                <div className="flex text-[#F5C452]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="ml-2 text-gray-500">5</span>
            </div>
            <div className="flex items-center text-sm">
                <span className="w-28 text-gray-600">Communication</span>
                <div className="flex text-[#F5C452]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="ml-2 text-gray-500">5</span>
            </div>
        </div>

        <p className="text-gray-700 text-base leading-relaxed mb-3">{review.text}</p>
        <p className="text-sm text-gray-500">Service reviewed: {review.service}</p>
    </div>
);

export default ReviewItem;