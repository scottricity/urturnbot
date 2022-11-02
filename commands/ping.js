import { SlashCommand , CommandContext } from "slash-create";
console.log("ok")
exports = class PingCommand extends SlashCommand {
  constructor(creator) {
    super(creator, {
      name: 'ping',
      description: 'Ping the server.'
    });

    this.filePath = __filename;
  }

  /**
   * 
   * @param {CommandContext} ctx 
   */
  async run(ctx) {
    return `hello`;
  }
}