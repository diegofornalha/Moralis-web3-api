const Moralis = require("moralis").default;
const express = require("express");
const cors = require("cors");
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const app = express();
const port = 4000;

// Permitir acesso do app React
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const MORALIS_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjRkNWQ2M2JiLWY5NzQtNDhkNC05YzdmLTAwMDczNDY1Nzg2MyIsIm9yZ0lkIjoiNDEwNTU4IiwidXNlcklkIjoiNDIxOTEwIiwidHlwZUlkIjoiNzNhNzQ2MDAtMGZhMy00NzM5LTliZGUtMjczYTlmNDMwZGVmIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjgxNTM5ODAsImV4cCI6NDg4MzkxMzk4MH0.Hd7EzLn5-Y8ZM6e5Id7oF49vFikK7dy3MwXAbekqFis";
const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";

app.get("/balances", async (req, res) => {
  try {
    const [nativeBalance, tokenBalances] = await Promise.all([
      Moralis.EvmApi.balance.getNativeBalance({
        chain: EvmChain.ETHEREUM,
        address,
      }),
      Moralis.EvmApi.token.getWalletTokenBalances({
        chain: EvmChain.ETHEREUM,
        address,
      }),
    ]);

    res.status(200).json({
      address,
      nativeBalance: nativeBalance.result.balance.ether,
      tokenBalances: tokenBalances.result.map((token) => token.display()),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
};

startServer();
