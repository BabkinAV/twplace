import React, { useEffect, useRef, useState } from 'react';
import { StyledSeoText } from './SeoText.styles';
import DownArrow from '../assets/downArrow.svg';
import Image from 'next/image';

const SeoText = () => {
  const [secondaryTextVisible, setSecondaryTextVisible] = useState(false);
  const [height, setHeight] = useState<number | undefined>(
    secondaryTextVisible ? undefined : 0
  );
  useEffect(() => {
    if (secondaryTextVisible)
      setHeight(refHiddenSection.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [secondaryTextVisible]);
  const refHiddenSection = useRef<HTMLDivElement>(null);

  return (
    <StyledSeoText className="description">
      <h2 className="description__heading">
        Широкий ассортимент и высокое качество
      </h2>
      <p
        className={`description__paragraph ${
          secondaryTextVisible ? '' : ' description__paragraph--transparent'
        }`}
      >
        Интернет-магазин twPlace – это доступные цены, широкий, регулярно
        обновляемый ассортимент. В онлайн-каталоге twPlace представлено около 35
        000 ведущих брендов женской, мужской и детской одежды и обуви.
        Покупателям предлагается электроника, книжная продукция, детские товары.
        В интернет-магазине можно приобрести продукцию для дома, продукты
        питания, товары для красоты, ювелирные изделия, игрушки. Для удобства
        пользования онлайн-каталог поделен на разделы, все товары можно
        сортировать по ряду критериев: цена, материал изготовления, сезонность,
        бренд. Интернет-магазин twPlace регулярно проводит масштабные
        распродажи. В рамках таких акций предоставляются большие скидки (до 95%)
        на одежду, обувь, детские товары. Условия распродаж распространяютс я и
        на электронику, продукты питания, товары для дома, книги и многое
        другое.
      </p>

      <div className="description__collapsible" style={{ height }}>
        <div className="description__hidden" ref={refHiddenSection}>
          <p className="description__paragraph description__paragraph--secondary">
            Sed ac orci sit amet arcu hendrerit sagittis. Nam elit mauris,
            consectetur a lectus in, dapibus finibus diam. Ut malesuada odio
            pellentesque mauris fringilla, tempor posuere urna elementum. In
            quis tincidunt ipsum, in egestas nulla. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Donec nec finibus
            nulla.
          </p>
          <p className="description__paragraph description__paragraph--secondary">
            Nullam vitae hendrerit urna. Nunc nec libero viverra, mollis ex a,
            varius justo. Nulla facilisi. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Proin nec
            sapien venenatis est hendrerit ultrices. Sed vitae nisi orci.
            Vivamus auctor feugiat neque eget dapibus. Nam eget leo et quam
            euismod congue ut vitae dui. Sed eget metus ac nisi fermentum
            tempor. Morbi ut dolor ex. Nullam vel blandit nisl.
          </p>
        </div>
      </div>
      <button
        className="description__button"
        onClick={() => setSecondaryTextVisible(prevState => !prevState)}
      >
        <span className="description__read-more">Читать полностью</span>
        <Image
          src={DownArrow}
          alt="down arrow"
          className={`description__down-arrow${
            secondaryTextVisible ? ' description__down-arrow--rotated' : ''
          }`}
          width={10}
          height={10}
        />
      </button>
    </StyledSeoText>
  );
};

export default SeoText;
