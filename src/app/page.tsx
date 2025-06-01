'use client';
import {
	CheckCircle,
	Download,
	Github,
	Settings,
	Star,
	Users,
	Zap
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Badge } from '../componentes/ui/badge';
import { Button } from '../componentes/ui/button';
import { Card, CardContent } from '../componentes/ui/card';
import { getPackageInfo } from '../lib/getPackageInfo';



export default function BranchizenLanding() {
	const [dataPackage, setDataPackage] = useState({
		version: '0.0.0',
		downloads: 0,
	});

	useEffect(() => {
		const data = async () => {
			const packageInfo = await getPackageInfo('branchizen');
			setDataPackage(packageInfo);
			console.log(packageInfo);
		};
		data();
		return () => {
			console.log('desmontado');
		};
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700">
			{/* Navigation */}
			<nav className="flex items-center justify-between p-6 text-white">
				<div className="flex items-center space-x-2">
					<div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
						<span className="text-lg">🪄</span>
					</div>
					<span className="font-semibold text-lg">Branchizen</span>
				</div>
				<div className="hidden md:flex items-center space-x-8">
					{/* <Link
						href="#docs"
						className="hover:opacity-80 transition-opacity"
					>
						DOCUMENTACIÓN
					</Link> */}
					<Link
						href="#install"
						className="hover:opacity-80 transition-opacity"
					>
						INSTALACIÓN
					</Link>
					<Link
						href="#config"
						className="hover:opacity-80 transition-opacity"
					>
						CONFIGURACIÓN
					</Link>
				</div>
			</nav>

			{/* Hero Section */}
			<div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:py-24 max-w-7xl mx-auto">
				<div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
					<div className="mb-6">
						<Badge
							variant="secondary"
							className="bg-white/20 text-white border-white/30 mb-4"
						>
							🪄 v{dataPackage.version} Latest
						</Badge>
					</div>

					<h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
						Branchizen
					</h1>

					<p className="text-xl lg:text-2xl text-white/90 mb-4 max-w-2xl">
						Generador interactivo y configurable de nombres de ramas
						Git
					</p>

					<p className="text-lg text-white/80 mb-8 max-w-2xl">
						Ideal para equipos que siguen convenciones como: <br />
						<code className="bg-white/20 px-2 py-1 rounded text-white font-mono text-sm">
							feature/FE_1234_fix_ui_bug_jdoe
						</code>
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
						<Button
							size="lg"
							variant="outline"
							className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-all"
							onClick={() => {
								window.location.href = '#install';
							}}
						>
							<Download className="w-4 h-4 mr-2" />
							Instalación Rápida
						</Button>
						{/* <Button
							size="lg"
							variant="outline"
							className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-all"
						>
							<BookOpen className="w-4 h-4 mr-2" />
							Documentación
						</Button> */}
						<a
							href="https://github.com/Anderrc/Brachizen"
							target="_blank"
							rel="noreferrer nofollow"
						>
							<Button
								size="lg"
								variant="outline"
								className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-all"
							>
								<Github className="w-4 h-4 mr-2" />
								GitHub
							</Button>
						</a>
					</div>

					{/* Stats */}
					<div className="flex flex-wrap gap-6 justify-center lg:justify-start text-white/80">
						<div className="flex items-center gap-2">
							<Download className="w-4 h-4" />
							<span className="text-sm">
								{dataPackage.downloads}+ descargas
							</span>
						</div>
						<div className="flex items-center gap-2">
							<Star className="w-4 h-4" />
							<span className="text-sm">Licencia MIT</span>
						</div>
						<div className="flex items-center gap-2">
							<Users className="w-4 h-4" />
							<span className="text-sm">Node.js v14+</span>
						</div>
					</div>
				</div>

				{/* Interactive Branch Diagram */}
				<div className="flex-1 flex justify-center lg:justify-end">
					<div className="relative w-80 h-96">
						<svg
							viewBox="0 0 300 400"
							className="w-full h-full"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							{/* Main branch */}
							<line
								x1="50"
								y1="50"
								x2="50"
								y2="350"
								stroke="white"
								strokeWidth="3"
							/>

							{/* Feature branches with labels */}
							<line
								x1="50"
								y1="100"
								x2="150"
								y2="120"
								stroke="white"
								strokeWidth="2"
							/>
							<line
								x1="150"
								y1="120"
								x2="150"
								y2="180"
								stroke="white"
								strokeWidth="2"
							/>
							<line
								x1="150"
								y1="180"
								x2="50"
								y2="200"
								stroke="white"
								strokeWidth="2"
							/>

							<line
								x1="50"
								y1="150"
								x2="200"
								y2="170"
								stroke="white"
								strokeWidth="2"
							/>
							<line
								x1="200"
								y1="170"
								x2="200"
								y2="230"
								stroke="white"
								strokeWidth="2"
							/>
							<line
								x1="200"
								y1="230"
								x2="50"
								y2="250"
								stroke="white"
								strokeWidth="2"
							/>

							<line
								x1="50"
								y1="280"
								x2="120"
								y2="300"
								stroke="white"
								strokeWidth="2"
							/>
							<line
								x1="120"
								y1="300"
								x2="120"
								y2="340"
								stroke="white"
								strokeWidth="2"
							/>
							<line
								x1="120"
								y1="340"
								x2="50"
								y2="350"
								stroke="white"
								strokeWidth="2"
							/>

							{/* Commit dots */}
							<circle cx="50" cy="50" r="4" fill="white" />
							<circle cx="50" cy="100" r="4" fill="white" />
							<circle cx="150" cy="120" r="4" fill="white" />
							<circle cx="150" cy="150" r="4" fill="white" />
							<circle cx="150" cy="180" r="4" fill="white" />
							<circle cx="50" cy="150" r="4" fill="white" />
							<circle cx="200" cy="170" r="4" fill="white" />
							<circle cx="200" cy="200" r="4" fill="white" />
							<circle cx="200" cy="230" r="4" fill="white" />
							<circle cx="50" cy="200" r="4" fill="white" />
							<circle cx="50" cy="250" r="4" fill="white" />
							<circle cx="50" cy="280" r="4" fill="white" />
							<circle cx="120" cy="300" r="4" fill="white" />
							<circle cx="120" cy="320" r="4" fill="white" />
							<circle cx="120" cy="340" r="4" fill="white" />
							<circle cx="50" cy="350" r="4" fill="white" />

							{/* Branch labels */}
							<text
								x="160"
								y="140"
								fill="white"
								fontSize="10"
								className="font-mono"
							>
								feature/1234_fix_login_jdoe
							</text>
							<text
								x="210"
								y="190"
								fill="white"
								fontSize="10"
								className="font-mono"
							>
								bugfix/5678_auth_error_acastano
							</text>
							<text
								x="130"
								y="320"
								fill="white"
								fontSize="10"
								className="font-mono"
							>
								hotfix/urgent_fix_team
							</text>
						</svg>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="bg-white/10 backdrop-blur-sm">
				<a id="docs"></a>
				<div className="max-w-6xl mx-auto px-6 py-16">
					<h2 className="text-3xl font-bold text-white text-center mb-12">
						¿Por qué Branchizen?
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<Card className="bg-white/10 border-white/20 text-white">
							<CardContent className="p-6">
								<Zap className="w-8 h-8 mb-4 text-yellow-300" />
								<h3 className="text-xl font-semibold mb-3">
									Interactivo
								</h3>
								<p className="text-white/80">
									Flujo paso a paso que te guía para crear
									nombres de ramas consistentes sin memorizar
									convenciones.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-white/10 border-white/20 text-white">
							<CardContent className="p-6">
								<Settings className="w-8 h-8 mb-4 text-blue-300" />
								<h3 className="text-xl font-semibold mb-3">
									Configurable
								</h3>
								<p className="text-white/80">
									Personaliza completamente el orden de campos
									y preguntas a través del archivo
									.branchizenrc.json.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-white/10 border-white/20 text-white">
							<CardContent className="p-6">
								<CheckCircle className="w-8 h-8 mb-4 text-green-300" />
								<h3 className="text-xl font-semibold mb-3">
									Consistente
								</h3>
								<p className="text-white/80">
									Garantiza que todo el equipo siga las mismas
									convenciones de nomenclatura para las ramas.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			{/* Installation Section */}
			<div className="max-w-4xl mx-auto px-6 py-16">
				<a id="install"></a>
				<h2 className="text-3xl font-bold text-white text-center mb-8">
					Instalación y Uso
				</h2>
				<div className="space-y-6">
					<div className="bg-black/20 rounded-lg p-6 font-mono text-white">
						<div className="flex items-center justify-between mb-4">
							<span className="text-sm opacity-70">
								Instalación Global
							</span>
							<Button
								size="sm"
								variant="ghost"
								className="text-white hover:bg-white/20"
								onClick={() =>
									navigator.clipboard.writeText(
										'npm install -g branchizen',
									)
								}
							>
								Copiar
							</Button>
						</div>
						<div className="space-y-2">
							<div>
								<span className="text-green-400">$</span> npm
								install -g branchizen
							</div>
						</div>
					</div>

					<div className="bg-black/20 rounded-lg p-6 font-mono text-white">
						<a id="config"></a>
						<div className="flex items-center justify-between mb-4">
							<span className="text-sm opacity-70">
								Configuración Inicial (Opcional)
							</span>
							<Button
								size="sm"
								variant="ghost"
								className="text-white hover:bg-white/20"
								onClick={() =>
									navigator.clipboard.writeText(
										'npx branchizen config',
									)
								}
							>
								Copiar
							</Button>
						</div>
						<div className="space-y-2">
							<div>
								<span className="text-green-400">$</span> npx
								branchizen config
							</div>
							<div className="text-gray-300 text-sm">
								# Configura el orden de campos interactivos
							</div>
						</div>
					</div>

					<div className="bg-black/20 rounded-lg p-6 font-mono text-white">
						<div className="flex items-center justify-between mb-4">
							<span className="text-sm opacity-70">
								Crear Nueva Rama
							</span>
							<Button
								size="sm"
								variant="ghost"
								className="text-white hover:bg-white/20"
								onClick={() =>
									navigator.clipboard.writeText(
										'npx branchizen',
									)
								}
							>
								Copiar
							</Button>
						</div>
						<div className="space-y-2">
							<div>
								<span className="text-green-400">$</span> npx
								branchizen
							</div>
							<div className="text-blue-300">
								✔ ¿Qué tipo de rama quieres crear? › feature
							</div>
							<div className="text-blue-300">
								✔ Descripción (en snake_case): ›
								add_login_screen
							</div>
							<div className="text-blue-300">
								✔ Tu nombre de usuario: › jdoe
							</div>
							<div className="text-yellow-300">
								<br />✅ Nombre de rama sugerido:
								<br />
								feature/add_login_screen_jdoe
							</div>
							<div className="text-blue-300">
								✔ ¿Deseas crear esta rama con Git? › (Y/n)
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Configuration Example */}
			<div className="bg-white/5 backdrop-blur-sm">
				<div className="max-w-4xl mx-auto px-6 py-16">
					<h2 className="text-3xl font-bold text-white text-center mb-8">
						Configuración Personalizada
					</h2>
					<div className="bg-black/30 rounded-lg p-6 font-mono text-white">
						<div className="flex items-center justify-between mb-4">
							<span className="text-sm opacity-70">
								.branchizenrc.json
							</span>
							<Button
								size="sm"
								variant="ghost"
								className="text-white hover:bg-white/20"
								onClick={() =>
									navigator.clipboard.writeText(`{
  "order": ["ticket", "description", "user"],
  "questions": {
    "ticket": "ID del ticket:",
    "description": "Descripción (en snake_case):",
    "user": "Tu nombre de usuario:"
  }
}`)
								}
							>
								Copiar
							</Button>
						</div>
						<pre className="text-sm">
							{`{
  "order": ["ticket", "description", "user"],
  "questions": {
    "ticket": "ID del ticket:",
    "description": "Descripción (en snake_case):",
    "user": "Tu nombre de usuario:"
  }
}`}
						</pre>
					</div>
					<p className="text-white/80 text-center mt-4">
						Personaliza completamente el flujo agregando nuevos
						campos al array{' '}
						<code className="bg-white/20 px-1 rounded">order</code>{' '}
						y definiendo sus preguntas en{' '}
						<code className="bg-white/20 px-1 rounded">
							questions
						</code>
						.
					</p>
				</div>
			</div>

			{/* Footer */}
			<footer className="text-center py-8 text-white/60">
				<p>Desarrollado por Anderson Castaño • Licencia MIT</p>
				<p className="text-sm mt-2">
					Inspirado en la necesidad de mantener convenciones claras y
					consistentes en Git
				</p>
			</footer>
		</div>
	);
}

