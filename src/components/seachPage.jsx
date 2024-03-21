import { Link } from "react-router-dom";
import samsungLogo from "./img/samsung.png";
import realmeLogo from "./img/realme.png";
import xiaomiLogo from "./img/xiaomi.png";
import oneplusLogo from "./img/oneplus.png";
import { Button, ColorBtn, Centrado } from "../style-components/Button";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px; 
  position: fixed;
  z-index: -1;
  
 
`;

const Cell = styled.div`
  margin: 5px;
  
  position: relative;
`;

const SearchPage = () => {
    const celulares = ['samsung', 'realme', 'xiaomi', 'oneplus'];
  
    const logos = {
        samsung: samsungLogo,
        realme: realmeLogo,
        xiaomi: xiaomiLogo,
        oneplus: oneplusLogo
    };
  
    return (
      <div className="features cambio">
        <Centrado><ColorBtn>Marcas disponibles</ColorBtn></Centrado>
        <Row>
          {celulares.map(celular => (
            
            <Cell key={celular}>
              <Link to={`/celulares/${celular}`}>
                
                <Button>
                  <img src={logos[celular.toLowerCase()]} alt={celular} width={300} />
                </Button>
              </Link>
            </Cell>
          ))}
        </Row>
      </div>
    );
};

export default SearchPage;
