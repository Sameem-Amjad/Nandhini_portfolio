type FooterLink = {
    label: string;
    link: string;
};
const FooterList = ({ title, links }: { title: string; links: FooterLink[] }) => (
    <div className="mb-8 md:mb-0">
        <h3 className="text-white font-bold mb-4">{title}</h3>
        <ul className="space-y-3">
            {links.map((item, idx) => (
                <li key={idx}>
                    <a
                        href={item.link}
                        target="_blank"
                        className="text-gray-300 hover:text-white text-base transition-colors font-medium hover:underline"
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterList;