import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


// Creamos el menú desplegable
const DropBar = () => {
    return (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    Blanqueamiento dental
      </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    Revisión
      </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    Endodoncia / empaste
      </a>
            </Menu.Item>
        </Menu>
    )
}

export default DropBar;