#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file:///Users/asren/Desktop/web/Vue/byecode/node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js");
  }
});

// scripts/utils.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:
${value}
`);
  }
}
var init_utils = __esm({
  "scripts/utils.ts"() {
    init_client();
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    init_utils();
    await $`pnpm spellcheck`.catch((out) => {
      console.log(out);
      throw new Error(out.stdout);
    });
    await Promise.all([$`pnpm type-check`, $`pnpm lint:stage`]).catch((out) => {
      printObject(out);
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch(() => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy50cyIsICJzY3JpcHRzL2NoZWNrLnRzIiwgInNjcmlwdHMvcHJlLWNvbW1pdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovLy9Vc2Vycy9hc3Jlbi9EZXNrdG9wL3dlYi9WdWUvYnllY29kZS9ub2RlX21vZHVsZXMvLnBucG0vdHNub0AyLjAuMC9ub2RlX21vZHVsZXMvdHNuby9kaXN0L2NsaWVudC5qc1wiKTtcbmltcG9ydCB7XG4gIGNvbG9yc1xufSBmcm9tIFwiLi9jaHVuay1GSERYWE9LWS5qc1wiO1xuXG5cbi8vIHNyYy9jbGllbnQudHNcbnZhciBmZXRjaCA9ICh1cmwsIGluaXQpID0+IGltcG9ydChcIi4vc3JjLTRRN1E2N0MzLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQodXJsLCBpbml0KSk7XG52YXIgYXhpb3MgPSAoY29uZmlnKSA9PiBpbXBvcnQoXCIuL2F4aW9zLVBJWjRDNVVaLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQoY29uZmlnKSk7XG5leHBvcnQge1xuICBheGlvcyxcbiAgY29sb3JzLFxuICBmZXRjaFxufTtcbiIsICJpbXBvcnQgeyBQcm9jZXNzT3V0cHV0IH0gZnJvbSAnengvY29yZSdcblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50T2JqZWN0KFxuICBvYmplY3Q6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgUHJvY2Vzc091dHB1dCxcbiAgbWV0aG9kOiAnbG9nJyB8ICd3YXJuJyB8ICdlcnJvcicgPSAnbG9nJ1xuKSB7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGVbbWV0aG9kXShgJHtrZXl9OlxcbiR7dmFsdWV9XFxuYClcbiAgfVxufVxuIiwgIiMhL3Vzci9iaW4vZW52IHp4XG5cbmltcG9ydCB0eXBlIHsgUHJvY2Vzc091dHB1dCB9IGZyb20gJ3p4JztcbmltcG9ydCB7ICQgfSBmcm9tICd6eCc7XG5cbmltcG9ydCB7IHByaW50T2JqZWN0IH0gZnJvbSAnLi91dGlscyc7XG5cbmF3YWl0ICRgcG5wbSBzcGVsbGNoZWNrYC5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XG4gIGNvbnNvbGUubG9nKG91dCk7XG5cbiAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpO1xufSk7XG5cbi8vIGF3YWl0IFByb21pc2UuYWxsKFskYHBucG0gdHlwZS1jaGVja2AsICRgcG5wbSBsaW50YF0pLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcbi8vICAgcHJpbnRPYmplY3Qob3V0KVxuLy8gICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcbi8vIH0pXG5cbi8vIGNoZWNrIHR5cGUgYW5kIHN0YWdlXG5hd2FpdCBQcm9taXNlLmFsbChbJGBwbnBtIHR5cGUtY2hlY2tgLCAkYHBucG0gbGludDpzdGFnZWBdKS5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XG4gIHByaW50T2JqZWN0KG91dCk7XG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KTtcbn0pO1xuIiwgIiMhL3Vzci9iaW4vZW52IHp4XG5cbmltcG9ydCB7ICQgfSBmcm9tICd6eCc7XG5cbmNvbnNvbGUubG9nKCdcdTVGMDBcdTU5Q0JcdTYyNjdcdTg4NENcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzAuLi5cXG4nKTtcblxuYXdhaXQgaW1wb3J0KCcuL2NoZWNrJykuY2F0Y2goKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1x1NEVFM1x1NzgwMVx1OEQyOFx1OTFDRlx1OEJDNFx1NEYzMFx1NTkzMVx1OEQyNSwgXHU4QkY3XHU2OEMwXHU2N0U1XHU0RUUzXHU3ODAxJyk7XG59KTtcblxuY29uc29sZS5sb2coJ3ByaW50ZiBcIlx1NjhDMFx1NkQ0Qlx1OTAxQVx1OEZDNywgXHU1MjFCXHU1RUZBIGNvbW1pdCBcdTRFMkQuLi5cXG4nKTtcblxuYXdhaXQgJGBnaXQgYWRkIC5gO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFBQSxTQUFRLGlCQUFpQix5QkFBd0I7QUFBakQsSUFBOERBO0FBQTlEO0FBQUE7QUFBMEQsSUFBSUEsV0FBUSxrQkFBa0IsNEdBQTRHO0FBQUE7QUFBQTs7O0FDRTdMLFNBQVMsWUFDZCxRQUNBLFNBQW1DLE9BQ25DO0FBQ0EsYUFBVyxDQUFDLEtBQUssS0FBSyxLQUFLLE9BQU8sUUFBUSxNQUFNLEdBQUc7QUFFakQsWUFBUSxRQUFRLEdBQUc7QUFBQSxFQUFTO0FBQUEsQ0FBUztBQUFBLEVBQ3ZDO0FBQ0Y7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUdBLFNBQVMsU0FBUztBQUhsQjtBQUFBO0FBQUE7QUFLQTtBQUVBLFVBQU0sbUJBQW1CLE1BQU0sQ0FBQyxRQUF1QjtBQUNyRCxjQUFRLElBQUksR0FBRztBQUVmLFlBQU0sSUFBSSxNQUFNLElBQUksTUFBTTtBQUFBLElBQzVCLENBQUM7QUFRRCxVQUFNLFFBQVEsSUFBSSxDQUFDLG9CQUFvQixrQkFBa0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUF1QjtBQUN4RixrQkFBWSxHQUFHO0FBQ2YsWUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsSUFDNUIsQ0FBQztBQUFBO0FBQUE7OztBQ3RCRDtBQUVBLFNBQVMsS0FBQUMsVUFBUztBQUVsQixRQUFRLElBQUksbUVBQWlCO0FBRTdCLE1BQU0sdUNBQWtCLE1BQU0sTUFBTTtBQUNsQyxRQUFNLElBQUksTUFBTSxrRkFBaUI7QUFDbkMsQ0FBQztBQUVELFFBQVEsSUFBSSxtRUFBZ0M7QUFFNUMsTUFBTUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmUiLCAiJCJdCn0K
