import {NestFactory} from "@nestjs/core"
import {AppModule} from "./app.module"
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


// https://www.youtube.com/watch?v=dDeWWQWMM-Y

async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)
    const config = new DocumentBuilder()
        .setTitle('Rest api on Nest js')
        .setDescription('rest api documentation')
        .setVersion('1.0.0')
        .addTag('TAG Da')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs', app, document)

    await app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`))
}

start()