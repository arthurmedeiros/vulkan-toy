#version 450
#extension GL_EXT_nonuniform_qualifier : require

layout (binding = 1) uniform sampler2D texSampler[];

layout(push_constant) uniform constants {
    int textureIndex;
} pc;

layout(location = 0) in vec3 fragColor;
layout(location = 1) in vec2 fragTexCoord;

layout(location = 0) out vec4 outColor;

void main() {
    if (pc.textureIndex < 0) {
        outColor = vec4(fragColor,1.f);
    }
    else {
        outColor = texture(texSampler[pc.textureIndex], fragTexCoord);
    }
}