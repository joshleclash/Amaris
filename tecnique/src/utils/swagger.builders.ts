
import { DocumentBuilder } from "@nestjs/swagger";
export default ()=>{
    return  new DocumentBuilder()
        .setTitle('Demo API')
        .setDescription('A Demo API with CRUD functionality')
        .setVersion('1.0')
        .build();
} 