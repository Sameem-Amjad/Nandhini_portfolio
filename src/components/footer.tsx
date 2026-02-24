

const FooterList = ({ title, links }: { title: string; links: string[] }) => (
    <div className="mb-8 md:mb-0">
        <h3 className="text-white font-bold mb-4">{title}</h3>
        <ul className="space-y-3">
            {links.map((link, idx) => (
                <li key={idx}>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors font-medium hover:underline">{link}</a>
                </li>
            ))}
        </ul>
    </div>
);

export { FooterList };