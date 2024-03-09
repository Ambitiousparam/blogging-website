import { Box ,Typography} from "@mui/material"
import { blogpagestyles } from "../../styles/view-styles"

const Viewblog = () => {
  return (
    <Box sx = {blogpagestyles.container}>
        <Box sx = {blogpagestyles.profileheader}>
            <Typography sx ={blogpagestyles.headertext}>
               Robin singh
            </Typography>
            <Box sx = {blogpagestyles.profileheaderitems}>
              {/* */}
            </Box>
            <Typography sx ={blogpagestyles.headertext}>
             getupparam@gmail.com
            </Typography>

        </Box>

        <Typography sx = {blogpagestyles.blogtitle}>EXPLORING GRAPHQL IN 2024: UNLEASHING THE POWER OF API FLEXIBILIT</Typography>
        <Typography sx = {blogpagestyles.blogcontent}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel fugit, minus autem, quam inventore commodi velit est consectetur aliquid dolore, architecto laboriosam modi molestias. Rem eius laudantium eum ab qui similique, fuga voluptas autem quasi quis, vero, neque ullam ipsam officia ipsa reiciendis dignissimos inventore sit consequuntur nam facere molestias a pariatur molestiae. Beatae iure asperiores vitae reiciendis delectus quam rerum laudantium placeat aliquam repudiandae, voluptate quae! Repudiandae enim, repellat dolor eligendi animi sunt? Rem adipisci maxime ipsa autem. Quo, porro voluptatem. Tenetur, a. Vitae neque nobis consectetur eaque eligendi facere quibusdam porro perferendis corporis eius. Provident velit sequi mollitia.br <br /><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quo dolor voluptates sequi corrupti officiis eos libero illo officia harum iusto numquam exercitationem, earum, praesentium odio architecto quia. Dolore quasi fuga, ducimus quas repellat qui harum tempore saepe labore eos repellendus facilis odio culpa at distinctio quia. Aliquid, architecto repellendus aspernatur excepturi neque corporis nulla quasi et sit suscipit ipsum voluptatum, debitis eos dignissimos qui, porro fugiat pariatur dolorem labore eveniet quia earum tempora repellat voluptas? Officia rerum itaque quia consequuntur minima similique ipsum laborum reiciendis quae placeat atque obcaecati fugiat repellat inventore, dicta eius ea quo accusamus impedit sed iste odio autem fuga. Veniam laudantium deserunt saepe nemo. Doloremque, ipsum ad recusandae non, vero explicabo laborum atque omnis voluptates quae sapiente possimus impedit libero commodi autem porro iure repudiandae distinctio illum minima, ipsa modi aut? Commodi esse voluptatum, doloremque facere illo beatae debitis mollitia aspernatur veritatis est rem numquam modi corporis corrupti itaque libero nihil eius quis expedita, ea architecto error? Nostrum aspernatur porro ullam veniam. Hic, dolore temporibus error maiores ipsum vitae? Commodi temporibus magnam dicta fugiat perspiciatis modi eaque itaque eius. Eaque modi error maxime distinctio deleniti placeat expedita aliquid voluptas quaerat dolore! Quis voluptatibus deserunt quaerat. </Typography>

    </Box>
  )
}

export default Viewblog