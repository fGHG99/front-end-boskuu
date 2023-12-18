const { Menu } = require('../models')

const findAllMenu = async (req, res) => {
    try {
        const data= await Menu.findAll()
        
        const result = {
            status: 'ok',
            data: data
        }

        res.json(result)
    } catch (error) {
        console.log(error, 'Error find all Menu')
    }
}

const createNewMenu = async (req, res) => {
    try {
        const{name, description, price} = req.body

        const newMenu = await Menu.create({
            name:name,
            description:description,
            price:price
        })

        res.status(201).json({
            status:'ok',
            data: {
                id: newMenu.id,
                name: newMenu.name,
                description: newMenu.description,
                price: newMenu.price
            }
        })
    } catch (error) {
        console.log(error, 'error cannot creat new menu')
    }
    // //mendapatkan id baru
    // const lastItemMenuId = menu[menu.length - 1].id
    // const newIdMenu = lastItemMenuId + 1

    //menambahkan menu
    // const newMenuData = {id: newIdMenu, name:name, description:description, price:price}
    // menu.push(newMenuData)

    // res.status(201).json({ status: 'ok', message: 'berhasil menambahkan data menu baru', data: newMenuData})
}

const updateMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;

        const updatedMenu = await Menu.update(
            { name: name, description: description, price: price },
            { where: { id: id } }
        );

        if (updatedMenu[0] === 1) {
            res.json({ status: 'ok', message: 'Menu updated successfully' });
        } else {
            res.status(404).json({ status: 'error', message: 'Menu not found' });
        }
    } catch (error) {
        console.log(error, 'error updating menu');
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};

const deleteMenu = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedMenu = await Menu.destroy({ where: { id: id } });

        if (deletedMenu === 1) {
            res.json({ status: 'ok', message: 'Menu deleted successfully' });
        } else {
            res.status(404).json({ status: 'error', message: 'Menu not found' });
        }
    } catch (error) {
        console.log(error, 'error deleting menu');
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};

module.exports = {findAllMenu, createNewMenu, updateMenu, deleteMenu}