import './index.scss';

const AnimateLogos = ({ logoClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${logoClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimateLogos;