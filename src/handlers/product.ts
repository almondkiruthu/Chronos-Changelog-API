import prisma from "../db";

//Get all products
export const getProduct = async (req, res) => {
    const user = await prisma.user.findUnique({
        where:{
            id:req.user.id
        },
        include:{
            products:true
        }
})

res.json({data:user.products})
}